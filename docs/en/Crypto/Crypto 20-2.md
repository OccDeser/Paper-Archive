# Crypto 20-2
## A Polynomial-Time Algorithm for Solving the Hidden Subset Sum Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#a-polynomial-time-algorithm-for-solving-the-hidden-subset-sum-problem)
### Authors
* Jean-Sébastien Coron, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Agnese Gini, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> At Crypto ’99, Nguyen and Stern described a lattice based algorithm for solving the hidden subset sum problem, a variant of the classical subset sum problem where the n weights are also hidden. While the Nguyen-Stern algorithm works quite well in practice for moderate values of n, we argue that its complexity is actually exponential in n; namely in the final step one must recover a very short basis of a n-dimensional lattice, which takes exponential-time in n, as one must apply BKZ reduction with increasingly large block-sizes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_1](https://doi.org/10.1007/978-3-030-56880-1_1)
## Asymptotic Complexities of Discrete Logarithm Algorithms in Pairing-Relevant Finite Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#asymptotic-complexities-of-discrete-logarithm-algorithms-in-pairing-relevant-finite-fields)
### Authors
* Gabrielle De Micheli, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Cécile Pierrot, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
### Abstract
> We study the discrete logarithm problem at the boundary case between small and medium characteristic finite fields, which is precisely the area where finite fields used in pairing-based cryptosystems live. In order to evaluate the security of pairing-based protocols, we thoroughly analyze the complexity of all the algorithms that coexist at this boundary case: the Quasi-Polynomial algorithms, the Number Field Sieve and its many variants, and the Function Field Sieve. We adapt the latter to the particular case where the extension degree is composite, and show how to lower the complexity by working in a shifted function field. All this study finally allows us to give precise values for the characteristic asymptotically achieving the highest security level for pairings. Surprisingly enough, there exist special characteristics that are as secure as general ones.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_2](https://doi.org/10.1007/978-3-030-56880-1_2)
## Comparing the Difficulty of Factorization and Discrete Logarithm: A 240-Digit Experiment.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#comparing-the-difficulty-of-factorization-and-discrete-logarithm-a-240-digit-experiment)
### Authors
* Fabrice Boudot, Université de Limoges, XLIM, UMR 7252, F-87000, Limoges, France
* Pierrick Gaudry, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Emmanuel Thomé, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Paul Zimmermann, Université de Lorraine, CNRS, Inria, LORIA, F-54000, Nancy, France
* Nadia Heninger, University of California, San Diego, USA
### Abstract
> We report on two new records: the factorization of RSA-240, a 795-bit number, and a discrete logarithm computation over a 795-bit prime field. Previous records were the factorization of RSA-768 in 2009 and a 768-bit discrete logarithm computation in 2016. Our two computations at the 795-bit level were done using the same hardware and software, and show that computing a discrete logarithm is not much harder than a factorization of the same size. Moreover, thanks to algorithmic variants and well-chosen parameters, our computations were significantly less expensive than anticipated based on previous records.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_3](https://doi.org/10.1007/978-3-030-56880-1_3)
## Breaking the Decisional Diffie-Hellman Problem for Class Group Actions Using Genus Theory.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#breaking-the-decisional-diffie-hellman-problem-for-class-group-actions-using-genus-theory)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Jana Sotáková, QuSoft/University of Amsterdam, Amsterdam, The Netherlands
### Abstract
> In this paper, we use genus theory to analyze the hardness of the decisional Diffie–Hellman problem (DDH) for ideal class groups of imaginary quadratic orders, acting on sets of elliptic curves through isogenies; such actions are used in the Couveignes–Rostovtsev–Stolbunov protocol and in CSIDH. Concretely, genus theory equips every imaginary quadratic order \(\mathcal {O}\) with a set of assigned characters \(\chi : {\text {cl}}(\mathcal {O}) \rightarrow \{ \pm 1\}\), and for each such character and every secret ideal class \([\mathfrak {a}]\) connecting two public elliptic curves E and \(E' = [\mathfrak {a}] \star E\), we show how to compute \(\chi ([\mathfrak {a}])\) given only E and \(E'\), i.e. without knowledge of \([\mathfrak {a}]\). In practice, this breaks DDH as soon as the class number is even, which is true for a density 1 subset of all imaginary quadratic orders. For instance, our attack works very efficiently for all supersingular elliptic curves over \(\mathbb {F}_p\) with \(p \equiv 1 \bmod 4\). Our method relies on computing Tate pairings and walking down isogeny volcanoes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_4](https://doi.org/10.1007/978-3-030-56880-1_4)
## A Classification of Computational Assumptions in the Algebraic Group Model.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#a-classification-of-computational-assumptions-in-the-algebraic-group-model)
### Authors
* Balthazar Bauer, Inria, ENS, CNRS, PSL, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Julian Loss, University of Maryland, College Park, USA
### Abstract
> We give a taxonomy of computational assumptions in the algebraic group model (AGM). We first analyze Boyen’s Uber assumption family for bilinear groups and then extend it in several ways to cover assumptions as diverse as Gap Diffie-Hellman and LRSW. We show that in the AGM every member of these families is implied by the q-discrete logarithm (DL) assumption, for some q that depends on the degrees of the polynomials defining the Uber assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_5](https://doi.org/10.1007/978-3-030-56880-1_5)
## Fast Reduction of Algebraic Lattices over Cyclotomic Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#fast-reduction-of-algebraic-lattices-over-cyclotomic-fields)
### Authors
* Paul Kirchner, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, Rennes Univ., IRISA/CNRS France, Rennes, France
* Pierre-Alain Fouque, Rennes Univ., IRISA/CNRS France, Rennes, France
* Thomas Espitau, NTT Corp. Secure Plateform Laboratories, Rennes, France
### Abstract
> We describe two very efficient polynomial-time algorithms for reducing module lattices defined over arbitrary cyclotomic fields that solve the \(\gamma \)-Hermite Module-SVP problem. They both exploit the structure of tower fields and the second one also uses the symplectic geometry existing in these fields. We conjecture that a rank-2 module over a cyclotomic field of degree n with B-bit coefficients can be heuristically reduced within approximation factor \(2^{\widetilde{\text {O}}\left( n\right) }\) in time \(\widetilde{\text {O}}\left( n^2B\right) \). In the symplectic algorithm, if the condition number C of the input matrix is large enough, this complexity shrinks to \(\widetilde{\text {O}}\left( n^{\log _2 3}C\right) \). In cryptography, matrices are well-conditioned and we can take \(C=B\), but in the worst case, C can be as large as nB. This last result is particularly striking as for some matrices, we can go below the \(n^2B\) swaps lower bound given by the analysis of LLL based on the potential. These algorithms are parallel and we provide a full implementation. We apply them on multilinear cryptographic concrete parameters by reducing matrices of dimension 4096 with 6675-bit integers in 4 days. Finally, we give a quasicubic time for the Gentry-Szydlo algorithm and run it in dimension 1024. It requires efficient ideal multiplications which need fast lattice reductions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_6](https://doi.org/10.1007/978-3-030-56880-1_6)
## Faster Enumeration-Based Lattice Reduction: Root Hermite Factor k1/(2k) Time kk/8+o(k).
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#faster-enumeration-based-lattice-reduction-root-hermite-factor-k1-2k-time-kk-8-o-k)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, England
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
* Pierre-Alain Fouque, Univ. Rennes, CNRS, IRISA, Rennes, France
* Paul Kirchner, Univ. Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ. Rennes, CNRS, IRISA, Rennes, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### Abstract
> We give a lattice reduction algorithm that achieves root Hermite factor \(k^{1/(2k)}\) in time \(k^{k/8+o(k)}\) and polynomial memory. This improves on the previously best known enumeration-based algorithms which achieve the same quality, but in time \(k^{k/(2e) + o(k)}\). A cost of \(k^{k/8 + o(k)}\) was previously mentioned as potentially achievable (Hanrot-Stehlé’10) or as a heuristic lower bound (Nguyen’10) for enumeration algorithms. We prove the complexity and quality of our algorithm under a heuristic assumption and provide empirical evidence from simulation and implementation experiments attesting to its performance for practical and cryptographic parameter sizes. Our work also suggests potential avenues for achieving costs below \(k^{k/8 + o(k)}\) for the same root Hermite factor, based on the geometry of SDBKZ-reduced bases.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_7](https://doi.org/10.1007/978-3-030-56880-1_7)
## Lattice Reduction for Modules, or How to Reduce ModuleSVP to ModuleSVP.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#lattice-reduction-for-modules-or-how-to-reduce-modulesvp-to-modulesvp)
### Authors
* Tamalika Mukherjee, Purdue University, West Lafayette, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> This is the extended abstract of 
[MS20]. See the full version at eprint:2019/1142.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_8](https://doi.org/10.1007/978-3-030-56880-1_8)
## Random Self-reducibility of Ideal-SVP via Arakelov Random Walks.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#random-self-reducibility-of-ideal-svp-via-arakelov-random-walks)
### Authors
* Koen de Boer, Cryptology Group, CWI, Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Alice Pellet-Mary, imec-COSIC, KU Leuven, Leuven, Belgium
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
### Abstract
> Fixing a number field, the space of all ideal lattices, up to isometry, is naturally an abelian group, called the Arakelov class group. This fact, well known to number theorists, has so far not been explicitly used in the literature on lattice-based cryptography. Remarkably, the Arakelov class group is a combination of two groups that have already led to significant cryptanalytic advances: the class group and the unit torus.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_9](https://doi.org/10.1007/978-3-030-56880-1_9)
## Slide Reduction, Revisited - Filling the Gaps in SVP Approximation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#slide-reduction-revisited-filling-the-gaps-in-svp-approximation)
### Authors
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Jianwei Li, Information Security Group, Royal Holloway, University of London, Egham, UK
* Phong Q. Nguyen, Inria, Paris, France
* Phong Q. Nguyen, Département d’informatique de l’ENS, ENS, CNRS, PSL University, Paris, France
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### Abstract
> We show how to generalize Gama and Nguyen’s slide reduction algorithm [STOC ’08] for solving the approximate Shortest Vector Problem over lattices (SVP) to allow for arbitrary block sizes, rather than just block sizes that divide the rank n of the lattice. This leads to significantly better running times for most approximation factors. We accomplish this by combining slide reduction with the DBKZ algorithm of Micciancio and Walter [Eurocrypt ’16].

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_10](https://doi.org/10.1007/978-3-030-56880-1_10)
## Rounding in the Rings.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#rounding-in-the-rings)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#rounding-in-the-rings)
### Authors
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### Abstract
> In this work, we conduct a comprehensive study on establishing hardness reductions for (Module) Learning with Rounding over rings (RLWR). Towards this, we present an algebraic framework of LWR, inspired by a recent work of Peikert and Pepin (TCC ’19). Then we show a search-to-decision reduction for Ring-LWR, generalizing a result in the plain LWR setting by Bogdanov et al. (TCC ’15). Finally, we show a reduction from Ring-LWE to Module Ring-LWR (even for leaky secrets), generalizing the plain LWE to LWR reduction by Alwen et al. (Crypto ’13). One of our central techniques is a new ring leftover hash lemma, which might be of independent interests.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_11](https://doi.org/10.1007/978-3-030-56880-1_11)
## LWE with Side Information: Attacks and Concrete Security Estimation.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#lwe-with-side-information-attacks-and-concrete-security-estimation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#lwe-with-side-information-attacks-and-concrete-security-estimation)
### Authors
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Huijing Gong, University of Maryland, College Park, USA
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Mélissa Rossi, ANSSI, Paris, France
* Mélissa Rossi, ENS Paris, CNRS, PSL University, Paris, France
* Mélissa Rossi, Thales, Gennevilliers, France
* Mélissa Rossi, Inria, Paris, France
### Abstract
> We propose a framework for cryptanalysis of lattice-based schemes, when side information—in the form of “hints”—about the secret and/or error is available. Our framework generalizes the so-called primal lattice reduction attack, and allows the progressive integration of hints before running a final lattice reduction step. Our techniques for integrating hints include sparsifying the lattice, projecting onto and intersecting with hyperplanes, and/or altering the distribution of the secret vector. Our main contribution is to propose a toolbox and a methodology to integrate such hints into lattice reduction attacks and to predict the performance of those lattice attacks with side information.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_12](https://doi.org/10.1007/978-3-030-56880-1_12)
## A Key-Recovery Timing Attack on Post-quantum Primitives Using the Fujisaki-Okamoto Transformation and Its Application on FrodoKEM.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#a-key-recovery-timing-attack-on-post-quantum-primitives-using-the-fujisaki-okamoto-transformation-and-its-application-on-frodokem)
### Authors
* Qian Guo, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Alexander Nilsson, Department of Electrical and Information Technology, Lund University, Lund, Sweden
* Qian Guo, Selmer Center, Department of Informatics, University of Bergen, Bergen, Norway
* Alexander Nilsson, Advenica AB, Malmö, Sweden
### Abstract
> In the implementation of post-quantum primitives, it is well known that all computations that handle secret information need to be implemented to run in constant time. Using the Fujisaki-Okamoto transformation or any of its different variants, a CPA-secure primitive can be converted into an IND-CCA secure KEM. In this paper we show that although the transformation does not handle secret information apart from calls to the CPA-secure primitive, it has to be implemented in constant time. Namely, if the ciphertext comparison step in the transformation is leaking side-channel information, we can launch a key-recovery attack.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_13](https://doi.org/10.1007/978-3-030-56880-1_13)
## Efficient Pseudorandom Correlation Generators from Ring-LPN.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#efficient-pseudorandom-correlation-generators-from-ring-lpn)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#efficient-pseudorandom-correlation-generators-from-ring-lpn)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Secure multiparty computation can often utilize a trusted source of correlated randomness to achieve better efficiency. A recent line of work, initiated by Boyle et al. (CCS 2018, Crypto 2019), showed how useful forms of correlated randomness can be generated using a cheap, one-time interaction, followed by only “silent” local computation. This is achieved via a pseudorandom correlation generator (PCG), a deterministic function that stretches short correlated seeds into long instances of a target correlation. Previous works constructed concretely efficient PCGs for simple but useful correlations, including random oblivious transfer and vector-OLE, together with efficient protocols to distribute the PCG seed generation. Most of these constructions were based on variants of the Learning Parity with Noise (LPN) assumption. PCGs for other useful correlations had poor asymptotic and concrete efficiency.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_14](https://doi.org/10.1007/978-3-030-56880-1_14)
## Scalable Pseudorandom Quantum States.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#scalable-pseudorandom-quantum-states)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#scalable-pseudorandom-quantum-states)
### Authors
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Omri Shmueli, Tel-Aviv University, Tel Aviv, Israel
### Abstract
> Efficiently sampling a quantum state that is hard to distinguish from a truly random quantum state is an elementary task in quantum information theory that has both computational and physical uses. This is often referred to as pseudorandom (quantum) state generator, or PRS generator for short.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_15](https://doi.org/10.1007/978-3-030-56880-1_15)
## A Non-PCP Approach to Succinct Quantum-Safe Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#a-non-pcp-approach-to-succinct-quantum-safe-zero-knowledge)
### Authors
* Jonathan Bootle, IBM Research – Zurich, Rüschlikon, Switzerland
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
* Jonathan Bootle, UC Berkeley, Berkeley, USA
### Abstract
> Today’s most compact zero-knowledge arguments are based on the hardness of the discrete logarithm problem and related classical assumptions. If one is interested in quantum-safe solutions, then all of the known techniques stem from the PCP-based framework of Kilian (STOC 92) which can be instantiated based on the hardness of any collision-resistant hash function. Both approaches produce asymptotically logarithmic sized arguments but, by exploiting extra algebraic structure, the discrete logarithm arguments are a few orders of magnitude more compact in practice than the generic constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_16](https://doi.org/10.1007/978-3-030-56880-1_16)
## Practical Product Proofs for Lattice Commitments.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#practical-product-proofs-for-lattice-commitments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#practical-product-proofs-for-lattice-commitments)
### Authors
* Thomas Attema, CWI – Amsterdam, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO – The Hague, The Hague, The Netherlands
* Vadim Lyubashevsky, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research – Zurich, Rüschlikon, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### Abstract
> We construct a practical lattice-based zero-knowledge argument for proving multiplicative relations between committed values. The underlying commitment scheme that we use is the currently most efficient one of Baum et al. (SCN 2018), and the size of our multiplicative proof (9 KB) is only slightly larger than the 7 KB required for just proving knowledge of the committed values. We additionally expand on the work of Lyubashevsky and Seiler (Eurocrypt 2018) by showing that the above-mentioned result can also apply when working over rings \(\mathbb {Z}_q[X]/(X^d+1)\) where \(X^d+1\) splits into low-degree factors, which is a desirable property for many applications (e.g. range proofs, multiplications over \(\mathbb {Z}_q\)) that take advantage of packing multiple integers into the NTT coefficients of the committed polynomial.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_17](https://doi.org/10.1007/978-3-030-56880-1_17)
## Lattice-Based Blind Signatures, Revisited.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#lattice-based-blind-signatures-revisited)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#lattice-based-blind-signatures-revisited)
### Authors
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Julian Loss, University of Maryland, College Park, USA
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
* Ngoc Khanh Nguyen, IBM Research, Zurich, Rüschlikon, Switzerland
### Abstract
> We observe that all previously known lattice-based blind signature schemes contain subtle flaws in their security proofs (e.g., Rückert, ASIACRYPT ’08) or can be attacked (e.g., BLAZE by Alkadri et al., FC ’20). Motivated by this, we revisit the problem of constructing blind signatures from standard lattice assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_18](https://doi.org/10.1007/978-3-030-56880-1_18)
## Round-Optimal Black-Box Commit-and-Prove with Succinct Communication.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#round-optimal-black-box-commit-and-prove-with-succinct-communication)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#round-optimal-black-box-commit-and-prove-with-succinct-communication)
### Authors
* Susumu Kiyoshima, NTT Research, Palo Alto, CA, USA
### Abstract
> We give a four-round black-box construction of a commit-and-prove protocol with succinct communication. Our construction is WI and has constant soundness error, and it can be upgraded into a one that is ZK and has negligible soundness error by relying on a round-preserving transformation of Khurana et al. (TCC 2018). Our construction is obtained by combining the MPC-in-the-head technique of Ishai et al. (SICOMP 2009) with the two-round succinct argument of Kalai et al. (STOC 2014), and the main technical novelty lies in the analysis of the soundness—we show that, although the succinct argument of Kalai et al. does not necessarily provide soundness for \(\mathcal {NP}\) statements, it can be used in the MPC-in-the-head technique for proving the consistency of committed MPC views. Our construction is based on sub-exponentially hard collision-resistant hash functions, two-round PIRs, and two-round OTs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_19](https://doi.org/10.1007/978-3-030-56880-1_19)
## Efficient Constant-Round MPC with Identifiable Abort and Public Verifiability.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#efficient-constant-round-mpc-with-identifiable-abort-and-public-verifiability)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Aarhus University, Aarhus, Denmark
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Recent years have seen a tremendous growth in the interest in secure multiparty computation (MPC) and its applications. While much progress has been made concerning its efficiency, many current, state-of-the-art protocols are vulnerable to Denial of Service attacks, where a cheating party may prevent the honest parties from learning the output of the computation, whilst remaining anonymous. The security model of identifiable abort aims to prevent these attacks, by allowing honest parties to agree upon the identity of a cheating party, who can then be excluded in the future. Several existing MPC protocols offer security with identifiable abort against a dishonest majority of corrupted parties. However, all of these protocols have a round complexity that scales linearly with the depth of the circuit (and are therefore unsuitable for use in high latency networks) or use cryptographic primitives or techniques that have a high computational overhead.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_20](https://doi.org/10.1007/978-3-030-56880-1_20)
## Black-Box Use of One-Way Functions is Useless for Optimal Fair Coin-Tossing.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#black-box-use-of-one-way-functions-is-useless-for-optimal-fair-coin-tossing)
### Authors
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### Abstract
> A two-party fair coin-tossing protocol guarantees output delivery to the honest party even when the other party aborts during the protocol execution. Cleve (STOC–1986) demonstrated that a computationally bounded fail-stop adversary could alter the output distribution of the honest party by (roughly) 1/r (in the statistical distance) in an r-message coin-tossing protocol. An optimal fair coin-tossing protocol ensures that no adversary can alter the output distribution beyond 1/r.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_21](https://doi.org/10.1007/978-3-030-56880-1_21)
## Guaranteed Output Delivery Comes Free in Honest Majority MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#guaranteed-output-delivery-comes-free-in-honest-majority-mpc)
### Authors
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Chenzhi Zhu, Tsinghua University, Beijing, China
### Abstract
> We study the communication complexity of unconditionally secure MPC with guaranteed output delivery over point-to-point channels for corruption threshold \(t < n/2\), assuming the existence of a public broadcast channel. We ask the question: “is it possible to construct MPC in this setting s.t. the communication complexity per multiplication gate is linear in the number of parties?” While a number of works have focused on reducing the communication complexity in this setting, the answer to the above question has remained elusive until now. We also focus on the concrete communication complexity of evaluating each multiplication gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_22](https://doi.org/10.1007/978-3-030-56880-1_22)
## Black-Box Transformations from Passive to Covert Security with Public Verifiability.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#black-box-transformations-from-passive-to-covert-security-with-public-verifiability)
### Authors
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### Abstract
> In the context of secure computation, protocols with security against covert adversaries ensure that any misbehavior by malicious parties will be detected by the honest parties with some constant probability. As such, these protocols provide better security guarantees than passively secure protocols and, moreover, are easier to construct than protocols with full security against active adversaries. Protocols that, upon detecting a cheating attempt, allow the honest parties to compute a certificate that enables third parties to verify whether an accused party misbehaved or not are called publicly verifiable.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_23](https://doi.org/10.1007/978-3-030-56880-1_23)
## MPC with Friends and Foes.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#mpc-with-friends-and-foes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#mpc-with-friends-and-foes)
### Authors
* Bar Alon, Department of Computer Science, Ariel University, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel University, Ariel, Israel
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### Abstract
> Classical definitions for secure multiparty computation assume the existence of a single adversarial entity controlling the set of corrupted parties. Intuitively, the definition requires that the view of the adversary, corrupting t parties, in a real-world execution can be simulated by an adversary in an ideal model, where parties interact only via a trusted-party. No restrictions, however, are imposed on the view of honest parties in the protocol, thus, if honest parties obtain information about the private inputs of other honest parties – it is not counted as a violation of privacy. This is arguably undesirable in many situations that fall into the MPC framework. Nevertheless, there are secure protocols (e.g., the 2-round multiparty protocol of Ishai et al. [CRYPTO 2010] tolerating a single corrupted party) that instruct the honest parties to reveal their private inputs to all other honest parties (once the malicious party is somehow identified).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_24](https://doi.org/10.1007/978-3-030-56880-1_24)
## Always Have a Backup Plan: Fully Secure Synchronous MPC with Asynchronous Fallback.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#always-have-a-backup-plan-fully-secure-synchronous-mpc-with-asynchronous-fallback)
### Authors
* Erica Blum, University of Maryland, College Park, USA
* Julian Loss, University of Maryland, College Park, USA
* Chen-Da Liu-Zhang, ETH Zurich, Zürich, Switzerland
### Abstract
> Protocols for secure Multi-Party Computation (MPC) can be classified according to the underlying communication model. Two prominent communication models considered in the literature are the synchronous and asynchronous models, which considerably differ in terms of the achievable security guarantees. Synchronous MPC protocols can achieve the optimal corruption threshold n/2 and allow every party to give input, but become completely insecure when synchrony assumptions are violated. On the other hand, asynchronous MPC protocols remain secure under arbitrary network conditions, but can tolerate only n/3 corruptions and parties with slow connections unavoidably cannot give input.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_25](https://doi.org/10.1007/978-3-030-56880-1_25)
## Reverse Firewalls for Actively Secure MPCs.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#reverse-firewalls-for-actively-secure-mpcs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#reverse-firewalls-for-actively-secure-mpcs)
### Authors
* Suvradip Chakraborty, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### Abstract
> Reverse firewalls were introduced at Eurocrypt 2015 by Miro-nov and Stephens-Davidowitz, as a method for protecting cryptographic protocols against attacks on the devices of the honest parties. In a nutshell: a reverse firewall is placed outside of a device and its goal is to “sanitize” the messages sent by it, in such a way that a malicious device cannot leak its secrets to the outside world. It is typically assumed that the cryptographic devices are attacked in a “functionality-preserving way” (i.e. informally speaking, the functionality of the protocol remains unchanged under this attacks). In their paper, Mironov and Stephens-Davidowitz construct a protocol for passively-secure two-party computations with firewalls, leaving extension of this result to stronger models as an open question.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_26](https://doi.org/10.1007/978-3-030-56880-1_26)
## Stacked Garbling - Garbled Circuit Proportional to Longest Execution Path.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#stacked-garbling-garbled-circuit-proportional-to-longest-execution-path)
### Authors
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Secure two party computation (2PC) of arbitrary programs can be efficiently achieved using garbled circuits (GC). The bottleneck of GC efficiency is communication. It is widely believed that it is necessary to transmit the entire GC during 2PC, even for conditional branches that are not taken.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_27](https://doi.org/10.1007/978-3-030-56880-1_27)
## Better Concrete Security for Half-Gates Garbling (in the Multi-instance Setting).
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#better-concrete-security-for-half-gates-garbling-in-the-multi-instance-setting)
### Authors
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jonathan Katz, George Mason University, Fairfax, USA
* Xiao Wang, Northwestern University, Evanston, USA
* Chenkai Weng, Northwestern University, Evanston, USA
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> We study the concrete security of high-performance implementations of half-gates garbling, which all rely on (hardware-accelerated) AES. We find that current instantiations using k-bit wire labels can be completely broken—in the sense that the circuit evaluator learns all the inputs of the circuit garbler—in time \(O(2^k/C)\), where C is the total number of (non-free) gates that are garbled, possibly across multiple independent executions. The attack can be applied to existing circuit-garbling libraries using \(k=80\) when \(C \approx 10^9\), and would require \(267\) machine-months and cost about $\(3500\) to implement on the Google Cloud Platform. Since the attack can be fully parallelized, it could be carried out in about a month using \({\approx }250\) machines.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_28](https://doi.org/10.1007/978-3-030-56880-1_28)
## Improved Primitives for MPC over Mixed Arithmetic-Binary Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto%2020-2.md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto%2020-2.md#improved-primitives-for-mpc-over-mixed-arithmetic-binary-circuits)
### Authors
* Daniel Escudero, Aarhus University, Aarhus, Denmark
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Rahul Rachuri, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Marcel Keller, CSIRO’s Data61, Sydney, Australia
### Abstract
> This work introduces novel techniques to improve the translation between arithmetic and binary data types in secure multi-party computation. We introduce a new approach to performing these conversions using what we call extended doubly-authenticated bits (edaBits), which correspond to shared integers in the arithmetic domain whose bit decomposition is shared in the binary domain. These can be used to considerably increase the efficiency of non-linear operations such as truncation, secure comparison and bit-decomposition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-56880-1_29](https://doi.org/10.1007/978-3-030-56880-1_29)
