# Asiacrypt[2023-3]
## Quantum Attacks on Hash Constructions with Low Quantum Random Access Memory.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#quantum-attacks-on-hash-constructions-with-low-quantum-random-access-memory)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#quantum-attacks-on-hash-constructions-with-low-quantum-random-access-memory)
### Authors
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Shun Li, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Phuong Pham, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Guoyan Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Guoyan Zhang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, China
* Guoyan Zhang, Shandong Institute of Blockchain, Jinan, China
### Abstract
> At ASIACRYPT 2022, Benedikt, Fischlin, and Huppert proposed the quantum herding attacks on iterative hash functions for the first time. Their attack needs exponential quantum random access memory (qRAM), more precisely \(2^{0.43n}\) quantum accessible classical memory (QRACM). As the existence of large qRAM is questionable, Benedikt et al. leave an open question on building low-qRAM quantum herding attacks.
> 
> In this paper, we answer this open question by building a quantum herding attack, where the time complexity is slightly increased from Benedikt et al.’s \(2^{0.43n}\) to ours \(2^{0.46n}\), but it does not need qRAM anymore (abbreviated as no-qRAM). Besides, we also introduce various low-qRAM or no-qRAM quantum attacks on hash concatenation combiner, hash XOR combiner, Hash-Twice, and Zipper hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_1](https://doi.org/10.1007/978-981-99-8727-6_1)
## On Quantum Secure Compressing Pseudorandom Functions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#on-quantum-secure-compressing-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#on-quantum-secure-compressing-pseudorandom-functions)
### Authors
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Benoît Cogliati, Thales DIS France SAS, Meudon, France
* Jordan Ethan, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> In this paper we characterize all 2n-bit-to-n-bit Pseudorandom Functions (PRFs) constructed with the minimum number of calls to n-bit-to-n-bit PRFs and arbitrary number of linear functions. First, we show that all two-round constructions are either classically insecure, or vulnerable to quantum period-finding attacks. Second, we categorize three-round constructions depending on their vulnerability to these types of attacks. This allows us to identify classes of constructions that could be proven secure. We then proceed to show the security of the following three candidates against any quantum distinguisher that makes at most \( 2^{n/4} \) (possibly superposition) queries:
> 
> Note that the first construction is a classically secure tweakable block-cipher due to Bao et al., and the third construction was shown to be a quantum-secure tweakable block-cipher by Hosoyamada and Iwata with similar query limits. Of note is our proof framework, an adaptation of Chung et al.’s rigorous formulation of Zhandry’s compressed oracle technique in the indistinguishability setup, which could be of independent interest. This framework gives very compact and mostly classical-looking proofs as compared to Hosoyamada-Iwata interpretation of Zhandry’s compressed oracle.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_2](https://doi.org/10.1007/978-981-99-8727-6_2)
## Improved Quantum Circuits for AES: Reducing the Depth and the Number of Qubits.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#improved-quantum-circuits-for-aes-reducing-the-depth-and-the-number-of-qubits)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#improved-quantum-circuits-for-aes-reducing-the-depth-and-the-number-of-qubits)
### Authors
* Qun Liu, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Zheng Zhao, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Meiqin Wang, Quan Cheng Laboratory, Jinan, China
* Qun Liu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Zheng Zhao, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Quantum computers hold the potential to solve problems that are intractable for classical computers, thereby driving increased interest in the development of new cryptanalytic ciphers. In NIST’s post-quantum standardization process, the security categories are defined by the costs of quantum key search against AES. However, the cost estimates provided by Grassl et al. for the search are high. NIST has acknowledged that these initial classifications should be approached cautiously, since the costs of the most advanced attacks can be significantly reduced. Therefore, accurate resource estimations are crucial for evaluating the security of ciphers against quantum adversaries.
> 
> This paper presents a set of generic techniques for implementing AES quantum oracles, which are essential for quantum attacks such as Grover’s algorithms. Firstly, we introduce the mixing-XOR technique to reuse the ancilla qubits. At ASIACRYPT 2022, Huang et al. proposed an S-box structure with 120 ancilla qubits. We are able to reduce the number of ancilla qubits to 83 without increasing the T-depth. Secondly, we propose the combined pipeline architecture with the share technique to combine the S-box and its reverse, which achieves it with only 98 ancilla qubits, resulting in a significant reduction of 59% compared to the independent structure. Thirdly, we use a general algorithm to determine the depth of quantum circuits, searching for the in-place circuit of AES MixColumns with depth 16. Applying these improvements, we achieve the lower quantum depth of AES circuits, obtaining more precise resource estimates for Grover’s algorithm. For AES-128, -192, and -256, we only require the depth of 730, 876, and 1,018, respectively. Recently, the community has also focused on the trade-off of the time and space cost of quantum circuits for AES. In this regard, we present quantum implementations of AES circuits with a lower DW-cost on the zig-zag architecture. Compared with the circuit proposed by Huang et al., the DW-cost is reduced by 35%.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_3](https://doi.org/10.1007/978-981-99-8727-6_3)
## Hidden Stabilizers, the Isogeny to Endomorphism Ring Problem and the Cryptanalysis of pSIDH.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#hidden-stabilizers-the-isogeny-to-endomorphism-ring-problem-and-the-cryptanalysis-of-psidh)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#hidden-stabilizers-the-isogeny-to-endomorphism-ring-problem-and-the-cryptanalysis-of-psidh)
### Authors
* Mingjie Chen, University of Birmingham, Birmingham, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Muhammad Imran, Budapest University of Technology and Economics, Budapest, Hungary
* Gábor Ivanyos, Institute for Computer Science and Control, Hungarian Research Network, Budapest, Hungary
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR, UMR 6625, Université de Rennes, Rennes, France
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Christophe Petit, Université libre de Bruxelles, Bruxelles, Belgium
### Abstract
> The Isogeny to Endomorphism Ring Problem (IsERP) asks to compute the endomorphism ring of the codomain of an isogeny between supersingular curves in characteristic p given only a representation for this isogeny, i.e. some data and an algorithm to evaluate this isogeny on any torsion point. This problem plays a central role in isogeny-based cryptography; it underlies the security of pSIDH protocol (ASIACRYPT 2022) and it is at the heart of the recent attacks that broke the SIDH key exchange. Prior to this work, no efficient algorithm was known to solve IsERP for a generic isogeny degree, the hardest case seemingly when the degree is prime.
> 
> In this paper, we introduce a new quantum polynomial-time algorithm to solve IsERP for isogenies whose degrees are odd and have \(O(\log \log p)\) many prime factors. As main technical tools, our algorithm uses a quantum algorithm for computing hidden Borel subgroups, a group action on supersingular isogenies from EUROCRYPT 2021, various algorithms for the Deuring correspondence and a new algorithm to lift arbitrary quaternion order elements modulo an odd integer N with \(O(\log \log p)\) many prime factors to powersmooth elements.
> 
> As a main consequence for cryptography, we obtain a quantum polynomial-time key recovery attack on pSIDH. The technical tools we use may also be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_4](https://doi.org/10.1007/978-981-99-8727-6_4)
## Concrete Analysis of Quantum Lattice Enumeration.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#concrete-analysis-of-quantum-lattice-enumeration)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#concrete-analysis-of-quantum-lattice-enumeration)
### Authors
* Shi Bai, Florida Atlantic University, Boca Raton, USA
* Floyd B. Johnson, Florida Atlantic University, Boca Raton, USA
* Tran Ngo, Florida Atlantic University, Boca Raton, USA
* Maya-Iggy van Hoof, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Tanja Lange, Eindhoven University of Technology, Eindhoven, The Netherlands
### Abstract
> Lattice reduction algorithms such as BKZ (Block-Korkine-Zolotarev) play a central role in estimating the security of lattice-based cryptography. The subroutine in BKZ which finds the shortest vector in a projected sublattice can be instantiated with enumeration algorithms. The enumeration procedure can be seen as a depth-first search on some “enumeration tree” whose nodes denote a partial assignment of the coefficients, corresponding to lattice points as a linear combination of the lattice basis with the coefficients. This work provides a concrete analysis for the cost of quantum lattice enumeration based on Montanaro’s quantum tree backtracking algorithm. More precisely, we give a concrete implementation in the quantum circuit model. We also show how to optimize the circuit depth by parallelizing the components. Based on the circuit designed, we discuss the concrete quantum resource estimates required for lattice enumeration.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_5](https://doi.org/10.1007/978-981-99-8727-6_5)
## Forgery Attacks on Several Beyond-Birthday-Bound Secure MACs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#forgery-attacks-on-several-beyond-birthday-bound-secure-macs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#forgery-attacks-on-several-beyond-birthday-bound-secure-macs)
### Authors
* Yaobin Shen, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* Lei Wang, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> At CRYPTO’18, Datta et al. proposed nPolyMAC and proved the security up to \(2^{2n/3}\) authentication queries and \(2^{n}\) verification queries. At EUROCRYPT’19, Dutta et al. proposed CWC+ and showed the security up to \(2^{2n/3}\) queries. At FSE’19, Datta et al. proposed PolyMAC and its key-reduced variant 2k-PolyMAC, and showed the security up to \(2^{2n/3}\) queries. This security bound was then improved by Kim et al. (EUROCRYPT’20) and Datta et al. (FSE’23) respectively to \(2^{3n/4}\) and in the multi-user setting. At FSE’20, Chakraborti et al. proposed \(\mathsf{{PDM}}^*\mathsf{{MAC}}\) and \(\mathsf{{1k}}\text {-}\mathsf{{PDM}}^*\mathsf{{MAC}}\), and showed the security up to \(2^{2n/3}\) queries. Recently, Chen et al. proposed \(\mathsf{{nEHtM}}_p^{+}\) and showed the security up to \(2^{2n/3}\) queries. In this paper, we show forgery attacks on nPolyMAC, CWC+, PolyMAC, 2k-PolyMAC, \(\mathsf{{PDM}}^*\mathsf{{MAC}}\), \(\mathsf{{1k}}\text {-}\mathsf{{PDM}}^*\mathsf{{MAC}}\) and \(\mathsf{{nEHtM}}_p^{+}\). Our attacks exploit some vulnerability in the underlying polynomial hash function Poly, and (i) require only one authentication query and one verification query; (ii) are nonce-respecting; (iii) succeed with probability 1. Thus, our attacks disprove the provable high security claims of these schemes. We then revisit their security analyses and identify what went wrong. Finally, we propose two solutions that can restore the beyond-birthday-bound security.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_6](https://doi.org/10.1007/978-981-99-8727-6_6)
## Correlation Cube Attack Revisited - Improved Cube Search and Superpoly Recovery Techniques.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#correlation-cube-attack-revisited-improved-cube-search-and-superpoly-recovery-techniques)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#correlation-cube-attack-revisited-improved-cube-search-and-superpoly-recovery-techniques)
### Authors
* Jianhua Wang, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Lu Qin, China UnionPay Co., Ltd., Shanghai, China
* Lu Qin, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Baofeng Wu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Baofeng Wu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> In this paper, we improve the cube attack by exploiting low-degree factors of the superpoly w.r.t. certain “special” index set of cube (ISoC). This can be viewed as a special case of the correlation cube attack proposed at Eurocrypt 2018, but under our framework more beneficial equations on the key variables can be obtained in the key-recovery phase. To mount our attack, one has two challenging problems: (1) effectively recover algebraic normal form of the superpoly and extract out its low-degree factors; and (2) efficiently search a large quantity of good ISoCs. We bring in new techniques to solve both of them.
> 
> First, we propose the variable substitution technique for middle rounds of a cipher, in which polynomials on the key variables in the algebraic expressions of internal states are substituted by new variables. This will improve computational complexity of the superpoly recovery and promise more compact superpolys that can be easily decomposed with respect to the new variables. Second, we propose the vector numeric mapping technique, which seeks out a tradeoff between efficiency of the numeric mapping technique (Crypto 2019) and accuracy of the monomial prediction technique (Asiacrypt 2020) in degree evaluation of superpolys. Combining with this technique, a fast pruning method is given and modeled by MILP to filter good ISoCs of which the algebraic degree satisfies some fixed threshold. Thanks to automated MILP solvers, it becomes practical to comprehensively search for good cubes across the entire search space.
> 
> To illustrate the power of our techniques, we apply all of them to Trivium stream cipher. As a result, we have recovered the superpolys of three cubes given by Kesarwani et al. in 2020, only to find they do not have zero-sum property up to 842 rounds as claimed in their paper. To our knowledge, the previous best practical key recovery attack was on 820-round Trivium with complexity \(2^{53.17}\). We put forward 820-, 825- and 830-round practical key-recovery attacks, in which there are \(\mathbf {2^{80}\times 87.8\%}\), \(\mathbf {2^{80}\times 83\%}\) and \(\mathbf {2^{80}\times 65.7\%}\) keys that could be practically recovered, respectively, if we consider \(\mathbf {2^{60}}\) as the upper bound for practical computational complexity. Besides, even for computers with computational power not exceeding \(\mathbf {2^{52}}\) (resp. \(\mathbf {2^{55}}\)), we can still recover \(\mathbf {58\%}\) (resp. \(\mathbf {46.6\%}\)) of the keys in the key space for 820 rounds (resp. 830 rounds). Our attacks have led 10 rounds more than the previous best practical attack.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_7](https://doi.org/10.1007/978-981-99-8727-6_7)
## Differential-Linear Approximation Semi-unconstrained Searching and Partition Tree: Application to LEA and Speck.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#differential-linear-approximation-semi-unconstrained-searching-and-partition-tree-application-to-lea-and-speck)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#differential-linear-approximation-semi-unconstrained-searching-and-partition-tree-application-to-lea-and-speck)
### Authors
* Yi Chen, Institute for Advanced Study, Tsinghua University, Beijing, China
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Hongbo Yu, Department of Computer Science and Technology, Tsinghua University, Beijing, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
* Hongbo Yu, Zhongguancun Laboratory, Beijing, China
### Abstract
> The differential-linear attack is one of the most effective attacks against ARX ciphers. However, two technical problems are preventing it from being more effective and having more applications: (1) there is no efficient method to search for good differential-linear approximations. Existing methods either have many constraints or are currently inefficient. (2) partitioning technique has great potential to reduce the time complexity of the key-recovery attack, but there is no general tool to construct partitions for ARX ciphers. In this work, we step forward in solving the two problems. First, we propose a novel idea for generating new good differential-linear approximations from known ones, based on which new searching algorithms are designed. Second, we propose a general tool named partition tree, for constructing partitions for ARX ciphers. Based on these new techniques, we present better attacks for two ISO/IEC standards, i.e., LEA and Speck. For LEA, we present the first 17-round distinguisher which is 1 round longer than the previous best distinguisher. Furthermore, we present the first key recovery attacks on 17-round LEA-128, 18-round LEA-192, and 18-round LEA-256, which attack 3, 4, and 3 rounds more than the previous best attacks. For Speck, we find better differential-linear distinguishers for Speck48 and Speck64. The first differential-linear distinguishers for Speck96 and Speck128 are also presented.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_8](https://doi.org/10.1007/978-981-99-8727-6_8)
## Cryptanalysis of Elisabeth-4.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#cryptanalysis-of-elisabeth-4)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#cryptanalysis-of-elisabeth-4)
### Authors
* Henri Gilbert, ANSSI, Paris, France
* Jérémy Jean, ANSSI, Paris, France
* Jean-René Reinhard, ANSSI, Paris, France
* Henri Gilbert, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
### Abstract
> Elisabeth-4 is a stream cipher tailored for usage in hybrid homomorphic encryption applications that has been introduced by Cosseron et al. at ASIACRYPT 2022. In this paper, we present several variants of a key-recovery attack on the full Elisabeth-4 that break the 128-bit security claim of that cipher. Our most optimized attack is a chosen-IV attack with a time complexity of \(2^{88}\) elementary operations, a memory complexity of \(2^{54}\) bits and a data complexity of \(2^{41}\) bits.
> 
> Our attack applies the linearization technique to a nonlinear system of equations relating some keystream bits to the key bits and exploits specificities of the cipher to solve the resulting linear system efficiently. First, due to the structure of the cipher, the system to solve happens to be very sparse, which enables to rely on sparse linear algebra and most notably on the Block Wiedemann algorithm. Secondly, the algebraic properties of the two nonlinear ingredients of the filtering function cause rank defects which can be leveraged to solve the linearized system more efficiently with a decreased data and time complexity.
> 
> We have implemented our attack on a toy version of Elisabeth-4 to verify its correctness. It uses the efficient implementation of the Block Wiedemann algorithm of cado-nfs for the sparse linear algebra.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_9](https://doi.org/10.1007/978-981-99-8727-6_9)
## Algebraic Attacks on Round-Reduced Rain and Full AIM-III.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#algebraic-attacks-on-round-reduced-rain-and-full-aim-iii)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#algebraic-attacks-on-round-reduced-rain-and-full-aim-iii)
### Authors
* Kaiyi Zhang, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, Shandong, 266237, China
* Chun Guo, Shandong Research Institute of Industrial Technology, Jinan, Shandong, 250102, China
### Abstract
> Picnic is a NIST PQC Round 3 Alternate signature candidate that builds upon symmetric primitives following the MPC-in-the-head paradigm. Recently, researchers have been exploring more secure/efficient signature schemes from conservative one-way functions based on AES, or new low-complexity one-way functions like Rain (CCS 2022) and AIM (CCS 2023 and Round 1 Additional Signatures announced by NIST PQC). The signature schemes based on Rain and AIM are currently the most efficient among MPC-in-the-head-based schemes, making them promising post-quantum digital signature candidates.
> 
> However, the exact hardness of these new one-way functions deserves further study and scrutiny. This work presents algebraic attacks on Rain and AIM for certain instances, where one-round Rain can be compromised in \(2^{n/2}\) for security parameter \(n\in \{128,192,256\}\), and two-round Rain can be broken in \(2^{120.3}\), \(2^{180.4}\), and \(2^{243.1}\) encryptions, respectively. Additionally, we demonstrate an attack on AIM-III (which aims at 192-bit security) with a complexity of \(2^{186.5}\) encryptions. These attacks exploit the algebraic structure of the power function over fields with characteristic 2, which provides potential insights into the algebraic structures of some symmetric primitives and thus might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_10](https://doi.org/10.1007/978-981-99-8727-6_10)
## Quantum Speed-Up for Multidimensional (Zero Correlation) Linear Distinguishers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#quantum-speed-up-for-multidimensional-zero-correlation-linear-distinguishers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#quantum-speed-up-for-multidimensional-zero-correlation-linear-distinguishers)
### Authors
* Akinori Hosoyamada, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> This paper shows how to achieve a quantum speed-up for multidimensional (zero correlation) linear distinguishers. A previous work by Kaplan et al. has already shown a quantum quadratic speed-up for one-dimensional linear distinguishers. However, classical linear cryptanalysis often exploits multidimensional approximations to achieve more efficient attacks, and in fact it is highly non-trivial whether Kaplan et al.’s technique can be extended into the multidimensional case. To remedy this, we investigate a new quantum technique to speed-up multidimensional linear distinguishers. Firstly, we observe that there is a close relationship between the subroutine of Simon’s algorithm and linear correlations via Fourier transform. Specifically, a slightly modified version of Simon’s subroutine, which we call Correlation Extraction Algorithm (CEA), can be used to speed-up multidimensional linear distinguishers. CEA also leads to a speed-up for multidimensional zero correlation distinguishers, as well as some integral distinguishers through the correspondence of zero correlation and integral properties shown by Bogdanov et al. and Sun et al. Furthermore, we observe possibility of a more than quadratic speed-ups for some special types of integral distinguishers when multiple integral properties exist. Especially, we show a single-query distinguisher on a 4-bit cell SPN cipher with the same integral property as 2.5-round AES. Our attacks are the first to observe such a speed-up for classical cryptanalytic techniques without relying on hidden periods or shifts. By replacing the Hadamard transform in CEA with the general quantum Fourier transform, our technique also speeds-up generalized linear distinguishers on an arbitrary finite abelian group.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_11](https://doi.org/10.1007/978-981-99-8727-6_11)
## Exact Security Analysis of ASCON.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#exact-security-analysis-of-ascon)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#exact-security-analysis-of-ascon)
### Authors
* Bishwajit Chakraborty, Indian Statistical Institute, Kolkata, India
* Chandranan Dhar, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Bishwajit Chakraborty, Nanyang Technological University, Nanyang, Singapore
* Mridul Nandi, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
### Abstract
> The Ascon cipher suite, offering both authenticated encryption with associated data (AEAD) and hashing functionality, has recently emerged as the winner of the NIST Lightweight Cryptography (LwC) standardization process. The AEAD schemes within Ascon, namely Ascon-128 and Ascon-128a, have also been previously selected as the preferred lightweight authenticated encryption solutions in the CAESAR competition. In this paper, we present a tight and comprehensive security analysis of the Ascon AEAD schemes within the random permutation model. Existing integrity analyses of Ascon (and any Duplex AEAD scheme in general) commonly include the term \(DT/2^c\), where D and T represent data and time complexities respectively, and c denotes the capacity of the underlying sponge. In this paper, we demonstrate that Ascon achieves AE security when T is bounded by \(\min \{2^{\kappa }, 2^c\}\) (where \(\kappa \) is the key size), and DT is limited to \(2^b\) (with b being the size of the underlying permutation, which is 320 for Ascon). Our findings indicate that in accordance with NIST requirements, Ascon allows for a tag size as low as 64 bits while enabling a higher rate of 192 bits, surpassing the recommended rate.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_12](https://doi.org/10.1007/978-981-99-8727-6_12)
## Automated Meet-in-the-Middle Attack Goes to Feistel.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#automated-meet-in-the-middle-attack-goes-to-feistel)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#automated-meet-in-the-middle-attack-goes-to-feistel)
### Authors
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Guoyan Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Qingliang Hou, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Guoyan Zhang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, China
* Guoyan Zhang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
### Abstract
> Feistel network and its generalizations (GFN) are another important building blocks for constructing hash functions, e.g., Simpira v2, Areion, and the ISO standard Lesamnta-LW. The Meet-in-the-Middle (MitM) is a general paradigm to build preimage and collision attacks on hash functions, which has been automated in several papers. However, those automatic tools mostly focus on the hash function with Substitution-Permutation network (SPN) as building blocks, and only one for Feistel network by Schrottenloher and Stevens (at CRYPTO 2022).
> 
> In this paper, we introduce a new automatic model for MitM attacks on Feistel networks by generalizing the traditional direct or indirect partial matching strategies and also Sasaki’s multi-round matching strategy. Besides, we find the equivalent transformations of Feistel and GFN can significantly simplify the MILP model. Based on our automatic model, we improve the preimage attacks on Feistel-SP-MMO, Simpira-2/-4-DM, Areion-256/-512-DM by 1–2 rounds or significantly reduce the complexities. Furthermore, we fill in the gap left by Schrottenloher and Stevens at CRYPTO 2022 on the large branch (\(b>4\)) Simpira-b’s attack and propose the first 11-round attack on Simpira-6. Besides, we significantly improve the collision attack on the ISO standard hash Lesamnta-LW by increasing the attacked round number from previous 11 to ours 17 rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_13](https://doi.org/10.1007/978-981-99-8727-6_13)
## Revisiting Higher-Order Differential-Linear Attacks from an Algebraic Perspective.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#revisiting-higher-order-differential-linear-attacks-from-an-algebraic-perspective)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#revisiting-higher-order-differential-linear-attacks-from-an-algebraic-perspective)
### Authors
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Quan Quan Tan, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Trevor Yap, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> The Higher-order Differential-Linear (HDL) attack was introduced by Biham et al. at FSE 2005, where a linear approximation was appended to a Higher-order Differential (HD) transition. It is a natural generalization of the Differential-Linear (DL) attack. Due to some practical restrictions, however, HDL cryptanalysis has unfortunately attracted much less attention compared to its DL counterpart since its proposal.
> 
> In this paper, we revisit HD/HDL cryptanalysis from an algebraic perspective and provide two novel tools for detecting possible HD/HDL distinguishers, including: (a) Higher-order Algebraic Transitional Form (HATF) for probabilistic HD/HDL attacks; (b) Differential Supporting Function (DSF) for deterministic HD attacks. In general, the HATF can estimate the biases of \(\ell ^{th}\)-order HDL approximations with complexity \(\mathcal {O}(2^{\ell +d2^\ell })\) where d is the algebraic degree of the function studied. If the function is quadratic, the complexity can be further reduced to \(\mathcal {O}(2^{3.8\ell })\). HATF is therefore very useful in HDL cryptanalysis for ciphers with quadratic round functions, such as Ascon and Xoodyak. DSF provides a convenient way to find good linearizations on the input of a permutation, which facilitates the search for HD distinguishers.
> 
> Unsurprisingly, HD/HDL attacks have the potential to be more effective than their simpler differential/DL counterparts. Using HATF, we found many HDL approximations for round-reduced Ascon and Xoodyak initializations, with significantly larger biases than DL ones. For instance, there are deterministic 2\(^{nd}\)-order/4\(^{th}\)-order HDL approximations for Ascon/Xoodyak initializations, respectively (which is believed to be impossible in the simple DL case). We derived highly biased HDL approximations for 5-round Ascon up to 8\(^{th}\) order, which improves the complexity of the distinguishing attack on 5-round Ascon from \(2^{16}\) to \(2^{12}\) calls. We also proposed HDL approximations for 6-round Ascon and 5-round Xoodyak (under the single-key model), which couldn’t be reached with simple DL so far. For key recovery, HDL attacks are also more efficient than DL attacks, thanks to the larger biases of HDL approximations. Additionally, HATF works well for DL (1\(^{st}\)-order HDL) attacks and some well-known DL biases of Ascon and Xoodyak that could only be obtained experimentally before can now be predicted theoretically.
> 
> With DSF, we propose a new distinguishing attack on 8-round Ascon permutation, with a complexity of \(2^{48}\). Also, we provide a new zero-sum distinguisher for the full 12-round Ascon permutation with \(2^{55}\) time/data complexity. We highlight that our cryptanalyses do not threaten the security of Ascon or Xoodyak.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_14](https://doi.org/10.1007/978-981-99-8727-6_14)
## More Insight on Deep Learning-Aided Cryptanalysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#more-insight-on-deep-learning-aided-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#more-insight-on-deep-learning-aided-cryptanalysis)
### Authors
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Jinyu Lu, College of Sciences, National University of Defense Technology, Changsha, 410073, Hunan, China
* Jinyu Lu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yiran Yao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Liu Zhang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Liu Zhang, School of Cyber Engineering, Xidian University, Xi’an, China
* Liu Zhang, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### Abstract
> In CRYPTO 2019, Gohr showed that well-trained neural networks could perform cryptanalytic distinguishing tasks superior to differential distribution table (DDT)-based distinguishers. This suggests that the differential-neural distinguisher (\(\mathcal {N}\mathcal {D}\)) may use additional information besides pure ciphertext differences. However, the explicit knowledge beyond differential distribution is still unclear. In this work, we provide explicit rules that can be used alongside DDTs to enhance the effectiveness of distinguishers compared to pure DDT-based distinguishers. These rules are based on strong correlations between bit values in right pairs of XOR-differential propagation through addition modulo \(2^n\). Interestingly, they can be closely linked to the earlier study of the multi-bit constraints and the recent study of the fixed-key differential probability. In contrast, combining these rules does not improve the \(\mathcal {N}\mathcal {D}\)s’ performance. This suggests that these rules or their equivalent form have already been exploited by \(\mathcal {N}\mathcal {D}\)s, highlighting the power of neural networks in cryptanalysis.
> 
> In addition, we find that to enhance the differential-neural distinguisher’s accuracy and the number of rounds, regulating the differential propagation is imperative. Introducing differences into the keys is typically believed to help eliminate differences in encryption states, resulting in stronger differential propagations. However, differential-neural attacks differ from traditional ones as they don’t specify output differences or follow a single differential trail. This questions the usefulness of introducing differences in a key in differential-neural attacks and the resistance of Speck against such attacks in the related-key setting. This work shows that the power of differential-neural cryptanalysis in the related-key setting can exceed that in the single-key setting by successfully conducting a 14-round key recovery attack on Speck32/64 .

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_15](https://doi.org/10.1007/978-981-99-8727-6_15)
