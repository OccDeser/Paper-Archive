# Eurocrypt[2023-5]
## Unique-Path Identity Based Encryption with Applications to Strongly Secure Messaging.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging)
### Authors
* Paul Rösler, FAU Erlangen-Nürnberg, Erlangen, Germany
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### Abstract
> Hierarchical Identity Based Encryption (HIBE) is a well studied, versatile tool used in many cryptographic protocols. Yet, since the performance of all known HIBE constructions is broadly considered prohibitive, some real-world applications avoid relying on HIBE at the expense of security. A prominent example for this is secure messaging: Strongly secure messaging protocols are provably equivalent to Key-Updatable Key Encapsulation Mechanisms (KU-KEMs; Balli et al., Asiacrypt 2020); so far, all KU-KEM constructions rely on adaptive unbounded-depth HIBE (Poettering and Rösler, Jaeger and Stepanovs, both CRYPTO 2018). By weakening security requirements for better efficiency, many messaging protocols dispense with using HIBE.
> 
> In this work, we aim to gain better efficiency without sacrificing security. For this, we observe that applications like messaging only need a restricted variant of HIBE for strong security. This variant, that we call Unique-Path Identity Based Encryption (UPIBE), restricts HIBE by requiring that each secret key can delegate at most one subordinate secret key. However, in contrast to fixed secret key delegation in Forward-Secure Public Key Encryption, the delegation in UPIBE, as in HIBE, is uniquely determined by variable identity strings from an exponentially large space. We investigate this mild but surprisingly effective restriction and show that it offers substantial complexity and performance advantages.
> 
> More concretely, we generically build bounded-depth UPIBE from only bounded-collusion IBE in the standard model; and we generically build adaptive unbounded-depth UPIBE from only selective bounded-depth HIBE in the random oracle model. These results significantly extend the range of underlying assumptions and efficient instantiations. We conclude with a rigorous performance evaluation of our UPIBE design. Beyond solving challenging open problems by reducing complexity and improving efficiency of KU-KEM and strongly secure messaging protocols, we offer a new definitional perspective on the bounded-collusion setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_1](https://doi.org/10.1007/978-3-031-30589-4_1)
## End-to-End Secure Messaging with Traceability Only for Illegal Content.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content)
### Authors
* James Bartusek, University of California, Berkeley, USA
* Sanjam Garg, University of California, Berkeley, USA
* Guru-Vamsi Policharla, University of California, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
### Abstract
> As end-to-end encrypted messaging services become widely adopted, law enforcement agencies have increasingly expressed concern that such services interfere with their ability to maintain public safety. Indeed, there is a direct tension between preserving user privacy and enabling content moderation on these platforms. Recent research has begun to address this tension, proposing systems that purport to strike a balance between the privacy of “honest” users and traceability of “malicious” users. Unfortunately, these systems suffer from a lack of protection against malicious or coerced service providers. In this work, we address the privacy vs. content moderation question through the lens of pre-constrained cryptography [Ananth et al., ITCS 2022]. We introduce the notion of set pre-constrained (\(\textsf{SPC}\)) group signatures that guarantees security against malicious key generators. \(\textsf{SPC}\) group signatures offer the ability to trace users in messaging systems who originate pre-defined illegal content (such as child sexual abuse material), while providing security against malicious service providers. We construct concretely efficient protocols for \(\textsf{SPC}\) group signatures, and demonstrate the real-world feasibility of our approach via an implementation. The starting point for our solution is the recently introduced Apple PSI system, which we significantly modify to improve security and expand functionality.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_2](https://doi.org/10.1007/978-3-031-30589-4_2)
## Asymmetric Group Message Franking: Definitions and Constructions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#asymmetric-group-message-franking-definitions-and-constructions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#asymmetric-group-message-franking-definitions-and-constructions)
### Authors
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Xin Mu, Peng Cheng Laboratory, Shenzhen, China
* Siu Ming Yiu, The University of Hong Kong, Hong Kong, China
### Abstract
> As online group communication scenarios become more and more common these years, malicious or unpleasant messages are much easier to spread on the internet. Message franking is a crucial cryptographic mechanism designed for content moderation in online end-to-end messaging systems, allowing the receiver of a malicious message to report the message to the moderator. Unfortunately, the existing message franking schemes only consider 1-1 communication scenarios.
> 
> In this paper, we systematically explore message franking in group communication scenarios. We introduce the notion of asymmetric group message franking (AGMF), and formalize its security requirements. Then, we provide a framework of constructing AGMF from a new primitive, called . We also give a construction of based on the DDH assumption. Plugging the concrete scheme into our AGMF framework, we obtain a DDH-based AGMF scheme, which supports message franking in group communication scenarios.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_3](https://doi.org/10.1007/978-3-031-30589-4_3)
## Password-Authenticated TLS via OPAQUE and Post-Handshake Authentication.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#password-authenticated-tls-via-opaque-and-post-handshake-authentication)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#password-authenticated-tls-via-opaque-and-post-handshake-authentication)
### Authors
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Stanislaw Jarecki, UC Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, Boston, USA
* Christopher Wood, Cloudflare, San Francisco, USA
### Abstract
> OPAQUE is an Asymmetric Password-Authenticated Key Exchange (aPAKE) protocol being standardized by the IETF (Internet Engineering Task Force) as a more secure alternative to the traditional “password-over-TLS” mechanism prevalent in current practice. OPAQUE defends against a variety of vulnerabilities of password-over-TLS by dispensing with reliance on PKI and TLS security, and ensuring that the password is never visible to servers or anyone other than the client machine where the password is entered. In order to facilitate the use of OPAQUE in practice, integration of OPAQUE with TLS is needed. The main proposal for standardizing such integration uses the Exported Authenticators (TLS-EA) mechanism of TLS 1.3 that supports post-handshake authentication and allows for a smooth composition with OPAQUE. We refer to this composition as TLS-OPAQUE and present a detailed security analysis for it in the Universal Composability (UC) framework.
> 
> Our treatment is general and includes the formalization of components that are needed in the analysis of TLS-OPAQUE but are of wider applicability as they are used in many protocols in practice. Specifically, we provide formalizations in the UC model of the notions of post-handshake authentication and channel binding. The latter, in particular, has been hard to implement securely in practice, resulting in multiple protocol failures, including major attacks against prior versions of TLS. Ours is the first treatment of these notions in a computational model with composability guarantees.
> 
> We complement the theoretical work with a detailed discussion of practical considerations for the use and deployment of TLS-OPAQUE in real-world settings and applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_4](https://doi.org/10.1007/978-3-031-30589-4_4)
## Randomized Half-Ideal Cipher on Groups with Applications to UC (a)PAKE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake)
### Authors
* Bruno Freitas Dos Santos, University of California, Irvine, Irvine, USA
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
### Abstract
> An Ideal Cipher (IC) is a cipher where each key defines a random permutation on the domain. Ideal Cipher on a group has many attractive applications, e.g., the Encrypted Key Exchange (EKE) protocol for Password Authenticated Key Exchange (PAKE) [8], or asymmetric PAKE (aPAKE) [31, 33]. However, known constructions for IC on a group domain all have drawbacks, including key leakage from timing information [12], requiring 4 hash-onto-group operations if IC is an 8-round Feistel [22], and limiting the domain to half the group [9] or using variable-time encoding [39, 47] if IC is implemented via (quasi-) bijections from groups to bitstrings [33].
> 
> We propose an IC relaxation called a (Randomized) Half-Ideal Cipher (HIC), and we show that HIC on a group can be realized by a modified 2-round Feistel (m2F), at a cost of 1 hash-onto-group operation, which beats existing IC constructions in versatility and computational cost. HIC weakens IC properties by letting part of the ciphertext be non-random, but we exemplify that it can be used as a drop-in replacement for IC by showing that EKE [8] and aPAKE of [33] realize respectively UC PAKE and UC aPAKE even if they use HIC instead of IC. The m2F construction can also serve as IC domain extension, because m2F constructs HIC on domain D from an RO-indifferentiable hash onto D and an IC on \(2{\kappa }\)-bit strings, for \({\kappa }\) a security parameter. One application of such extender is a modular lattice-based UC PAKE using EKE instantiated with HIC and anonymous lattice-based KEM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_5](https://doi.org/10.1007/978-3-031-30589-4_5)
## End-to-End Encrypted Zoom Meetings: Proving Security and Strengthening Liveness.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness)
### Authors
* Yevgeniy Dodis, New York University, New York, USA
* Daniel Jost, New York University, New York, USA
* Balachandar Kesavan, Zoom Video Communications, San Jose, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
### Abstract
> In May 2020, Zoom Video Communications, Inc. (Zoom) announced a multi-step plan to comprehensively support end-to-end encrypted (E2EE) group video calls and subsequently rolled out basic E2EE support to customers in October 2020. In this work we provide the first formal security analysis of Zoom’s E2EE protocol, and also lay foundation to the general problem of E2EE group video communication.
> 
> We observe that the vast security literature analyzing asynchronous messaging does not translate well to synchronous video calls. Namely, while strong forms of forward secrecy and post compromise security are less important for (typically short-lived) video calls, various liveness properties become crucial. For example, mandating that participants quickly learn of updates to the meeting roster and key, media streams being displayed are recent, and banned participants promptly lose any access to the meeting. Our main results are as follows:
> 
> 1. Propose a new notion of leader-based continuous group key agreement with liveness, which accurately captures the E2EE properties specific to the synchronous communication scenario.
> 
> 2. Prove security of the core of Zoom’s E2EE meetings protocol in the above well-defined model.
> 
> 3. Propose ways to strengthen Zoom’s liveness properties by simple modifications to the original protocol, which have since been deployed in production.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_6](https://doi.org/10.1007/978-3-031-30589-4_6)
## Caveat Implementor! Key Recovery Attacks on MEGA.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#caveat-implementor-key-recovery-attacks-on-mega)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#caveat-implementor-key-recovery-attacks-on-mega)
### Authors
* Martin R. Albrecht, King’s College London, London, UK
* Miro Haller, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Lenka Mareková, Information Security Group, Royal Holloway, University of London, London, UK
### Abstract
> MEGA is a large-scale cloud storage and communication platform that aims to provide end-to-end encryption for stored data. A recent analysis by Backendal, Haller and Paterson (IEEE S &P 2023) invalidated these security claims by presenting practical attacks against MEGA that could be mounted by the MEGA service provider. In response, the MEGA developers added lightweight sanity checks on the user RSA private keys used in MEGA, sufficient to prevent the previous attacks.
> 
> We analyse these new sanity checks and show how they themselves can be exploited to mount novel attacks on MEGA that recover a target user’s RSA private key with only slightly higher attack complexity than the original attacks. We identify the presence of an ECB encryption oracle under a target user’s master key in the MEGA system; this oracle provides our adversary with the ability to partially overwrite a target user’s RSA private key with chosen data, a powerful capability that we use in our attacks. We then present two distinct types of attack, each type exploiting different error conditions arising in the sanity checks and in subsequent cryptographic processing during MEGA ’s user authentication procedure. The first type appears to be novel and exploits the manner in which the MEGA code handles modular inversion when recomputing \(u=q^{-1} \bmod p\). The second can be viewed as a small subgroup attack (van Oorschot and Wiener, EUROCRYPT 1996, Lim and Lee, CRYPTO 1998). We prototype the attacks and show that they work in practice.
> 
> As a side contribution, we show how to improve the RSA key recovery attack of Backendal-Haller-Paterson against the unpatched version of MEGA to require only 2 logins instead of the original 512.
> 
> We conclude by discussing wider lessons about secure implementation of cryptography that our work surfaces.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_7](https://doi.org/10.1007/978-3-031-30589-4_7)
## Finding Many Collisions via Reusable Quantum Walks - Application to Lattice Sieving.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving)
### Authors
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Chailloux, Inria, Paris, France
* André Schrottenloher, Inria, Univ. Rennes, IRISA, Rennes, France
* Yixin Shen, Royal Holloway, University of London, Egham, UK
### Abstract
> Given a random function f with domain \([2^n]\) and codomain \([2^m]\), with \(m \ge n\), a collision of f is a pair of distinct inputs with the same image. Collision finding is an ubiquitous problem in cryptanalysis, and it has been well studied using both classical and quantum algorithms. Indeed, the quantum query complexity of the problem is well known to be \(\varTheta (2^{m/3})\), and matching algorithms are known for any value of m.
> 
> The situation becomes different when one is looking for multiple collision pairs. Here, for \(2^k\) collisions, a query lower bound of \(\varTheta (2^{(2k+m)/3})\) was shown by Liu and Zhandry (EUROCRYPT 2019). A matching algorithm is known, but only for relatively small values of m, when many collisions exist. In this paper, we improve the algorithms for this problem and, in particular, extend the range of admissible parameters where the lower bound is met.
> 
> Our new method relies on a chained quantum walk algorithm, which might be of independent interest. It allows to extract multiple solutions of an MNRS-style quantum walk, without having to recompute it entirely: after finding and outputting a solution, the current state is reused as the initial state of another walk.
> 
> As an application, we improve the quantum sieving algorithms for the shortest vector problem (SVP), with a complexity of \(2^{0.2563d + o(d)}\) instead of the previous \(2^{0.2570d + o(d)}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_8](https://doi.org/10.1007/978-3-031-30589-4_8)
## Just How Hard Are Rotations of $\mathbb {Z}^n$? Algorithms and Cryptography with the Simplest Lattice.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice)
### Authors
* Atul Ganju, Cornell University, Ithaca, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
* Huck Bennett, Oregon State University, Corvallis, USA
* Pura Peetathawatchai, Stanford University, Stanford, USA
### Abstract
> We study the computational problem of finding a shortest non-zero vector in a rotation of \(\mathbb {Z}^n\), which we call \(\mathbb {Z}\)SVP. It has been a long-standing open problem to determine if a polynomial-time algorithm for \(\mathbb {Z}\)SVP exists, and there is by now a beautiful line of work showing how to solve it efficiently in certain very special cases. However, despite all of this work, the fastest known algorithm that is proven to solve \(\mathbb {Z}\)SVP is still simply the fastest known algorithm for solving SVP (i.e., the problem of finding shortest non-zero vectors in arbitrary lattices), which runs in \(2^{n + o(n)}\) time.
> 
> We therefore set aside the (perhaps impossible) goal of finding an efficient algorithm for \(\mathbb {Z}\)SVP and instead ask what else we can say about the problem. E.g., can we find any non-trivial speedup over the best known SVP algorithm? And, if \(\mathbb {Z}\)SVP actually is hard, then what consequences would follow? Our results are as follows.
> 
> 1. We show that \(\mathbb {Z}\)SVP is in a certain sense strictly easier than SVP on arbitrary lattices. In particular, we show how to reduce \(\mathbb {Z}\)SVP to an approximate version of SVP in the same dimension (in fact, even to approximate unique SVP, for any constant approximation factor). Such a reduction seems very unlikely to work for SVP itself, so we view this as a qualitative separation of \(\mathbb {Z}\)SVP from SVP. As a consequence of this reduction, we obtain a \(2^{n/2 + o(n)}\)-time algorithm for \(\mathbb {Z}\)SVP, i.e., the first non-trivial speedup over the best known algorithm for SVP on general lattices. (In fact, this reduction works for a more general class of lattices—semi-stable lattices with not-too-large \(\lambda _1\).)
> 
> 2. We show a simple public-key encryption scheme that is secure if (an appropriate variant of) \(\mathbb {Z}\)SVP is actually hard. Specifically, our scheme is secure if it is difficult to distinguish (in the worst case) a rotation of \(\mathbb {Z}^n\) from either a lattice with all non-zero vectors longer than \(\sqrt{n/\log n}\) or a lattice with smoothing parameter significantly smaller than the smoothing parameter of \(\mathbb {Z}^n\). The latter result has an interesting qualitative connection with reverse Minkowski theorems, which in some sense say that “\(\mathbb {Z}^n\) has the largest smoothing parameter.”
> 
> 3. We show a distribution of bases \(\textbf{B}\) for rotations of \(\mathbb {Z}^n\) such that, if \(\mathbb {Z}\)SVP is hard for any input basis, then \(\mathbb {Z}\)SVP is hard on input \(\textbf{B}\). This gives a satisfying theoretical resolution to the problem of sampling hard bases for \(\mathbb {Z}^n\), which was studied by Blanks and Miller [9]. This worst-case to average-case reduction is also crucially used in the analysis of our encryption scheme. (In recent independent work that appeared as a preprint before this work, Ducas and van Woerden showed essentially the same thing for general lattices [15], and they also used this to analyze the security of a public-key encryption scheme. Similar ideas also appeared in [5, 11, 20] in different contexts.)
> 
> 4. We perform experiments to determine how practical basis reduction performs on bases of \(\mathbb {Z}^n\) that are generated in different ways and how heuristic sieving algorithms perform on \(\mathbb {Z}^n\). Our basis reduction experiments complement and add to those performed by Blanks and Miller, as we work with a larger class of algorithms (i.e., larger block sizes) and study the “provably hard” distribution of bases described above. Our sieving experiments confirm that heuristic sieving algorithms perform as expected on \(\mathbb {Z}^n\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_9](https://doi.org/10.1007/978-3-031-30589-4_9)
## M-SIDH and MD-SIDH: Countering SIDH Attacks by Masking Information.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information)
### Authors
* Tako Boris Fouotsa, LASEC-EPFL, Lausanne, Switzerland
* Tomoki Moriya, The University of Tokyo, Tokyo, Japan
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham, Birmingham, UK
### Abstract
> The SIDH protocol is an isogeny-based key exchange protocol using supersingular isogenies, designed by Jao and De Feo in 2011. The protocol underlies the SIKE algorithm which advanced to the fourth round of NIST’s post-quantum standardization project in May 2022. The algorithm was considered very promising: indeed the most significant attacks against SIDH were meet-in-the-middle variants with exponential complexity, and torsion point attacks which only applied to unbalanced parameters (and in particular, not to SIKE).
> 
> This security picture dramatically changed in August 2022 with new attacks by Castryck-Decru, Maino-Martindale and Robert. Like prior attacks on unbalanced versions, these new attacks exploit torsion point information provided in the SIDH protocol. Crucially however, the new attacks embed the isogeny problem into a similar isogeny problem in a higher dimension to also affect the balanced parameters. As a result of these works, the SIKE algorithm is now fully broken both in theory and in practice.
> 
> Given the considerable interest attracted by SIKE and related protocols in recent years, it is natural to seek countermeasures to the new attacks. In this paper, we introduce two such countermeasures based on partially hiding the isogeny degrees and torsion point information in the SIDH protocol. We present a preliminary analysis of the resulting schemes including non-trivial generalizations of prior attacks. Based on this analysis we suggest parameters for our M-SIDH variant with public key sizes of 4434, 7037 and 9750 bytes respectively for NIST security levels 1, 3, 5.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_10](https://doi.org/10.1007/978-3-031-30589-4_10)
## Disorientation Faults in CSIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#disorientation-faults-in-csidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#disorientation-faults-in-csidh)
### Authors
* Gustavo Banegas, Inria and Laboratoire d’Informatique de l’Ecole polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Juliane Krämer, University of Regensburg, Regensburg, Germany
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Tanja Lange, Eindhoven University of Technology, Eindhoven, The Netherlands
* Tanja Lange, Academia Sinica, Taipei, Taiwan
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
* Monika Trimoska, Radboud University, Nijmegen, The Netherlands
* Jana Sotáková, University of Amsterdam and QuSoft, Amsterdam, The Netherlands
### Abstract
> We investigate a new class of fault-injection attacks against the CSIDH family of cryptographic group actions. Our disorientation attacks effectively flip the direction of some isogeny steps. We achieve this by faulting a specific subroutine, connected to the Legendre symbol or Elligator computations performed during the evaluation of the group action. These subroutines are present in almost all known CSIDH implementations. Post-processing a set of faulty samples allows us to infer constraints on the secret key. The details are implementation specific, but we show that in many cases, it is possible to recover the full secret key with only a modest number of successful fault injections and modest computational resources. We provide full details for attacking the original CSIDH proof-of-concept software as well as the CTIDH constant-time implementation. Finally, we present a set of lightweight countermeasures against the attack and discuss their security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_11](https://doi.org/10.1007/978-3-031-30589-4_11)
## On the Hardness of the Finite Field Isomorphism Problem.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#on-the-hardness-of-the-finite-field-isomorphism-problem)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#on-the-hardness-of-the-finite-field-isomorphism-problem)
### Authors
* Dipayan Das, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> The finite field isomorphism \((\textsf{FFI})\) problem was introduced in PKC’18, as an alternative to average-case lattice problems (like \(\textsf{LWE}\), \(\textsf{SIS}\), or \(\textsf{NTRU}\)). As an application, the same paper used the \(\textsf{FFI}\) problem to construct a fully homomorphic encryption scheme. In this work, we prove that the decision variant of the \(\textsf{FFI}\) problem can be solved in polynomial time for any field characteristics \(q= \varOmega (\beta n^2)\), where \(q,\beta ,n\) parametrize the \(\textsf{FFI}\) problem. Then we use our result from the \(\textsf{FFI}\) distinguisher to propose polynomial-time attacks on the semantic security of the fully homomorphic encryption scheme. Furthermore, for completeness, we also study the search variant of the \(\textsf{FFI}\) problem and show how to state it as a q-ary lattice problem, which was previously unknown. As a result, we can solve the search problem for some previously intractable parameters using a simple lattice reduction approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_12](https://doi.org/10.1007/978-3-031-30589-4_12)
## New Time-Memory Trade-Offs for Subset Sum - Improving ISD in Theory and Practice.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice)
### Authors
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Floyd Zweydinger, Ruhr University Bochum, Bochum, Germany
### Abstract
> We propose new time-memory trade-offs for the random subset sum problem defined on \((a_1,\ldots ,a_n,t)\) over \(\mathbb {Z}_{2^n}\). Our trade-offs yield significant running time improvements for every fixed memory limit \(M\ge 2^{0.091n}\). Furthermore, we interpolate to the running times of the fastest known algorithms when memory is not limited. Technically, our design introduces a pruning strategy to the construction by Becker-Coron-Joux (BCJ) that allows for an exponentially small success probability. We compensate for this reduced probability by multiple randomized executions. Our main improvement stems from the clever reuse of parts of the computation in subsequent executions to reduce the time complexity per iteration.
> 
> As an application of our construction, we derive the first non-trivial time-memory trade-offs for Information Set Decoding (ISD) algorithms. Our new algorithms improve on previous (implicit) trade-offs asymptotically as well as practically. Moreover, our optimized implementation also improves on running time, due to reduced memory access costs. We demonstrate this by obtaining a new record computation in decoding quasi-cyclic codes (QC-3138). Using our newly obtained data points we then extrapolate the hardness of suggested parameter sets for the NIST PQC fourth round candidates McEliece, BIKE and HQC, lowering previous estimates by up to 6 bits and further increasing their reliability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_13](https://doi.org/10.1007/978-3-031-30589-4_13)
## A New Algebraic Approach to the Regular Syndrome Decoding Problem and Implications for PCG Constructions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions)
### Authors
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Morten Øygarden, Simula UiB, Bergen, Norway
### Abstract
> The Regular Syndrome Decoding (RSD) problem, a variant of the Syndrome Decoding problem with a particular error distribution, was introduced almost 20 years ago by Augot et al.. In this problem, the error vector is divided into equally sized blocks, each containing a single noisy coordinate. More recently, the last five years have seen increased interest in this assumption due to its use in MPC and ZK applications. Generally referred to as “LPN with regular noise" in this context, the assumption allows to achieve better efficiency when compared to plain LPN. In all previous works of cryptanalysis, it has not been shown how to exploit the special feature of this problem in an attack.
> 
> We present the first algebraic attack on RSD. Based on a careful theoretical analysis of the underlying polynomial system, we propose concrete attacks that are able to take advantage of the regular noise distribution. In particular, we can identify several examples of concrete parameters where our techniques outperform other algorithms.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_14](https://doi.org/10.1007/978-3-031-30589-4_14)
## An Efficient Key Recovery Attack on SIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#an-efficient-key-recovery-attack-on-sidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#an-efficient-key-recovery-attack-on-sidh)
### Authors
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Thomas Decru, imec-COSIC, KU Leuven, Leuven, Belgium
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
### Abstract
> We present an efficient key recovery attack on the Supersingular Isogeny Diffie–Hellman protocol (SIDH). The attack is based on Kani’s “reducibility criterion” for isogenies from products of elliptic curves and strongly relies on the torsion point images that Alice and Bob exchange during the protocol. If we assume knowledge of the endomorphism ring of the starting curve then the classical running time is polynomial in the input size (heuristically), apart from the factorization of a small number of integers that only depend on the system parameters. The attack is particularly fast and easy to implement if one of the parties uses 2-isogenies and the starting curve comes equipped with a non-scalar endomorphism of very small degree; this is the case for SIKE, the instantiation of SIDH that recently advanced to the fourth round of NIST’s standardization effort for post-quantum cryptography. Our Magma implementation breaks SIKEp434, which aims at security level 1, in about ten minutes on a single core.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_15](https://doi.org/10.1007/978-3-031-30589-4_15)
## A Direct Key Recovery Attack on SIDH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-direct-key-recovery-attack-on-sidh)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-direct-key-recovery-attack-on-sidh)
### Authors
* Luciano Maino, University of Bristol, Bristol, UK
* Chloe Martindale, University of Bristol, Bristol, UK
* Giacomo Pope, University of Bristol, Bristol, UK
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Giacomo Pope, NCC Group, Cheltenham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> We present an attack on SIDH utilising isogenies between polarized products of two supersingular elliptic curves. In the case of arbitrary starting curve, our attack (discovered independently from [8]) has subexponential complexity, thus significantly reducing the security of SIDH and SIKE. When the endomorphism ring of the starting curve is known, our attack (here derived from [8]) has polynomial-time complexity assuming the generalised Riemann hypothesis. Our attack applies to any isogeny-based cryptosystem that publishes the images of points under the secret isogeny, for example Séta [13] and B-SIDH [11]. It does not apply to CSIDH [9], CSI-FiSh [3], or SQISign [14].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_16](https://doi.org/10.1007/978-3-031-30589-4_16)
## Breaking SIDH in Polynomial Time.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#breaking-sidh-in-polynomial-time)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#breaking-sidh-in-polynomial-time)
### Authors
* Damien Robert, INRIA Bordeaux-Sud-Ouest, 200 Avenue de la Vieille Tour, 33405, Talence Cedex, France
* Damien Robert, Institut de Mathématiques de Bordeaux, 351 cours de la liberation, 33405, Talence Cedex, France
### Abstract
> We show that we can break SIDH in (classical) polynomial time, even with a random starting curve \(E_0\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_17](https://doi.org/10.1007/978-3-031-30589-4_17)
## A Lower Bound on the Length of Signatures Based on Group Actions and Generic Isogenies.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Jiaxin Guan, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, USA
### Abstract
> We give the first black box lower bound for signature protocols that can be described as group actions, which include many based on isogenies. We show that, for a large class of signature schemes making black box use of a (potentially non-abelian) group action, the signature length must be \(\varOmega (\lambda ^2/\log \lambda )\). Our class of signatures generalizes all known signatures that derive security exclusively from the group action, and our lower bound matches the state of the art, showing that the signature length cannot be improved without deviating from the group action framework.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_18](https://doi.org/10.1007/978-3-031-30589-4_18)
## Short Signatures from Regular Syndrome Decoding in the Head.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#short-signatures-from-regular-syndrome-decoding-in-the-head)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#short-signatures-from-regular-syndrome-decoding-in-the-head)
### Authors
* Eliana Carozza, IRIF, Université Paris Cité, Paris, France
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> We introduce a new candidate post-quantum digital signature scheme from the regular syndrome decoding (RSD) assumption, an established variant of the syndrome decoding assumption which asserts that it is hard to find \(w \)-regular solutions to systems of linear equations over \(\mathbb {F}_2\) (a vector is regular if it is a concatenation of \(w \) unit vectors). Our signature is obtained by introducing and compiling a new 5-round zero-knowledge proof system constructed using the MPC-in-the-head paradigm. At the heart of our result is an efficient MPC protocol in the preprocessing model that checks correctness of a regular syndrome decoding instance by using a share ring-conversion mechanism.
> 
> The analysis of our construction is non-trivial and forms a core technical contribution of our work. It requires careful combinatorial analysis and combines several new ideas, such as analyzing soundness in a relaxed setting where a cheating prover is allowed to use any witness sufficiently close to a regular vector. We complement our analysis with an in-depth overview of existing attacks against RSD.
> 
> Our signatures are competitive with the best-known code-based signatures, ranging from 12.52 KB (fast setting, with signing time of the order of a few milliseconds on a single core of a standard laptop) to about 9 KB (short setting, with estimated signing time of the order of 15 ms).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_19](https://doi.org/10.1007/978-3-031-30589-4_19)
## The Return of the SDitH.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#the-return-of-the-sdith)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#the-return-of-the-sdith)
### Authors
* Carlos Aguilar-Melchor, SandboxAQ, Palo Alto, USA
* Nicolas Gama, SandboxAQ, Palo Alto, USA
* James Howe, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Dongze Yue, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
### Abstract
> This paper presents a code-based signature scheme based on the well-known syndrome decoding (SD) problem. The scheme builds upon a recent line of research which uses the Multi-Party-Computation-in-the-Head (MPCitH) approach to construct efficient zero-knowledge proofs, such as Syndrome Decoding in the Head (SDitH), and builds signature schemes from them using the Fiat-Shamir transform.
> 
> At the heart of our proposal is a new approach, Hypercube-MPCitH, to amplify the soundness of any MPC protocol that uses additive secret sharing. An MPCitH protocol with N parties can be repeated D times using parallel composition to reach the same soundness as a protocol run with \(N^D\) parties. However, the former comes with D times higher communication costs, often mainly contributed by the usage of D ‘auxiliary’ states (which in general have a significantly bigger impact on size than random states). Instead of that, we begin by generating \(N^D\) shares, arranged into a D-dimensional hypercube of side N containing only one ‘auxiliary’ state. We derive from this hypercube D sharings of size N which are used to run D instances of an N party MPC protocol. Hypercube-MPCitH leads to a protocol with \(1/N^D\) soundness error, requiring \(N^D\) offline computation, but with only \(N\cdot D\) online computation, and only 1 ‘auxiliary’. As the (potentially offline) share generation phase is generally inexpensive, this leads to trade-offs that are superior to just using parallel composition.
> 
> Our novel method of share generation and aggregation not only improves certain MPCitH protocols in general but also shows in concrete improvements of signature schemes. Specifically, we apply it to the work of Feneuil, Joux, and Rivain (CRYPTO’22) on code-based signatures, and obtain a new signature scheme that achieves a 8.1x improvement in global runtime and a 30x improvement in online runtime for their shortest signatures size (8,481 Bytes). It is also possible to leverage the fact that most computations are offline to define parameter sets leading to smaller signatures: 6,784 Bytes for 26 ms offline and 5,689 Bytes for 320 ms offline. For NIST security level 1, online signature cost is around 3 million cycles (<1 ms on commodity processors), regardless of signature size.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_20](https://doi.org/10.1007/978-3-031-30589-4_20)
## Chopsticks: Fork-Free Two-Round Multi-signatures from Non-interactive Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions)
### Authors
* Jiaxin Pan, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Multi-signatures have been drawing lots of attention in recent years, due to their applications in cryptocurrencies. Most early constructions require three-round signing, and recent constructions have managed to reduce the round complexity to two. However, their security proofs are mostly based on non-standard, interactive assumptions (e.g. one-more assumptions) and come with a huge security loss, due to multiple uses of rewinding (aka the Forking Lemma). This renders the quantitative guarantees given by the security proof useless.
> 
> In this work, we improve the state of the art by proposing two efficient two-round multi-signature schemes from the (standard, non-interactive) Decisional Diffie-Hellman (DDH) assumption. Both schemes are proven secure in the random oracle model without rewinding. We do not require any pairing either. Our first scheme supports key aggregation but has a security loss linear in the number of signing queries, and our second scheme is the first tightly secure construction.
> 
> A key ingredient in our constructions is a new homomorphic dual-mode commitment scheme for group elements, that allows to equivocate for messages of a certain structure. The definition and efficient construction of this commitment scheme is of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_21](https://doi.org/10.1007/978-3-031-30589-4_21)
## Threshold and Multi-signature Schemes from Linear Hash Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#threshold-and-multi-signature-schemes-from-linear-hash-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#threshold-and-multi-signature-schemes-from-linear-hash-functions)
### Authors
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> This paper gives new constructions of two-round multi-signa-tures and threshold signatures for which security relies solely on either the hardness of the (plain) discrete logarithm problem or the hardness of RSA, in addition to assuming random oracles. Their signing protocol is partially non-interactive, i.e., the first round of the signing protocol is independent of the message being signed.
> 
> We obtain our constructions by generalizing the most efficient discrete-logarithm based schemes, \(\textsf{MuSig2}\) (Nick, Ruffing, and Seurin, CRYPTO ’21) and \(\textsf{FROST}\) (Komlo and Goldberg, SAC ’20), to work with suitably defined linear hash functions. While the original schemes rely on the stronger and more controversial one-more discrete logarithm assumption, we show that suitable instantiations of the hash functions enable security to be based on either the plain discrete logarithm assumption or on RSA. The signatures produced by our schemes are equivalent to those obtained from Okamoto’s identification schemes (CRYPTO ’92).
> 
> More abstractly, our results suggest a general framework to transform schemes secure under OMDL into ones secure under the plain DL assumption and, with some restrictions, under RSA.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_22](https://doi.org/10.1007/978-3-031-30589-4_22)
## New Algorithms for the Deuring Correspondence - Towards Practical and Secure SQISign Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures)
### Authors
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR, Université de Rennes, Rennes, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Antonin Leroux, INRIA, Saclay, France
* Patrick Longa, Microsoft Research, Redmond, USA
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> The Deuring correspondence defines a bijection between isogenies of supersingular elliptic curves and ideals of maximal orders in a quaternion algebra. We present a new algorithm to translate ideals of prime-power norm to their corresponding isogenies — a central task of the effective Deuring correspondence. The new method improves upon the algorithm introduced in 2021 by De Feo, Kohel, Leroux, Petit and Wesolowski as a building-block of the SQISign signature scheme. SQISign is the most compact post-quantum signature scheme currently known, but is several orders of magnitude slower than competitors, the main bottleneck of the computation being the ideal-to-isogeny translation. We implement the new algorithm and apply it to SQISign, achieving a more than two-fold speedup in key generation and signing with a new choice of parameter. Moreover, after adapting the state-of-the-art \(\mathbb {F}_{p^2}\) multiplication algorithms by Longa to implement SQISign’s underlying extension field arithmetic and adding various improvements, we push the total speedups to over three times for signing and four times for verification.
> 
> In a second part of the article, we advance cryptanalysis by showing a very simple distinguisher against one of the assumptions used in SQISign. We present a way to impede the distinguisher through a few changes to the generic KLPT algorithm. We formulate a new assumption capturing these changes, and provide an analysis together with experimental evidence for its validity.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_23](https://doi.org/10.1007/978-3-031-30589-4_23)
## Revisiting BBS Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#revisiting-bbs-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#revisiting-bbs-signatures)
### Authors
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> BBS signatures were implicitly proposed by Boneh, Boyen, and Shacham (CRYPTO ’04) as part of their group signature scheme, and explicitly cast as stand-alone signatures by Camenisch and Lysyanskaya (CRYPTO ’04). A provably secure version, called BBS+, was then devised by Au, Susilo, and Mu (SCN ’06), and is currently the object of a standardization effort which has led to a recent RFC draft. BBS+ signatures are suitable for use within anonymous credential and DAA systems, as their algebraic structure enables efficient proofs of knowledge of message-signature pairs that support partial disclosure.
> 
> BBS+ signatures consist of one group element and two scalars. As our first contribution, we prove that a variant of BBS+ producing shorter signatures, consisting only of one group element and one scalar, is also secure. The resulting scheme is essentially the original BBS proposal, which was lacking a proof of security. Here we show it satisfies, under the q-SDH assumption, the same provable security guarantees as BBS+. We also provide a complementary tight analysis in the algebraic group model, which heuristically justifies instantiations with potentially shorter signatures.
> 
> Furthermore, we devise simplified and shorter zero-knowledge proofs of knowledge of a BBS message-signature pair that support partial disclosure of the message. Over the BLS12-381 curve, our proofs are 896 bits shorter than the prior proposal by Camenisch, Drijvers, and Lehmann (TRUST ’16), which is also adopted by the RFC draft.
> 
> Finally, we show that BBS satisfies one-more unforgeability in the algebraic group model in a scenario, arising in the context of credentials, where the signer can be asked to sign arbitrary group elements, meant to be commitments, without seeing their openings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_24](https://doi.org/10.1007/978-3-031-30589-4_24)
## Non-interactive Blind Signatures for Random Messages.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#non-interactive-blind-signatures-for-random-messages)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#non-interactive-blind-signatures-for-random-messages)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Blind signatures allow a signer to issue signatures on messages chosen by the signature recipient. The main property is that the recipient’s message is hidden from the signer. There are many applications, including Chaum’s e-cash system and Privacy Pass, where no special distribution of the signed message is required, and the message can be random. Interestingly, existing notions do not consider this practical use case separately. In this paper, we show that constraining the recipient’s choice over the message distribution spawns a surprising new primitive that improves the well-established state-of-the-art. We formalize this concept by introducing the notion of non-interactive blind signatures (\(\textsf{NIBS}\)). Informally, the signer can create a presignature with a specific recipient in mind, identifiable via a public key. The recipient can use her secret key to finalize it and receive a blind signature on a random message determined by the finalization process. The key idea is that online interaction between the signer and recipient is unnecessary. We show an efficient instantiation of \(\textsf{NIBS}\) in the random oracle model from signatures on equivalence classes. The exciting part is that, in this case, for the recipient’s public key, we can use preexisting keys for Schnorr, ECDSA signatures, El-Gamal encryption scheme or even the Diffie-Hellman key exchange. Reusing preexisting public keys allows us to distribute anonymous tokens similarly to cryptocurrency airdropping. Additional contributions include tagged non-interactive blind signatures (\(\textsf{TNIBS}\)) and their efficient instantiation. A generic construction in the random oracle or common reference string model based on verifiable random functions, standard signatures, and non-interactive proof systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_25](https://doi.org/10.1007/978-3-031-30589-4_25)
## Rai-Choo! Evolving Blind Signatures to the Next Level.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#rai-choo-evolving-blind-signatures-to-the-next-level)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#rai-choo-evolving-blind-signatures-to-the-next-level)
### Authors
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Blind signatures are a fundamental tool for privacy-preserving applications. Known constructions of concurrently secure blind signature schemes either are prohibitively inefficient or rely on non-standard assumptions, even in the random oracle model. A recent line of work (ASIACRYPT ‘21, CRYPTO ‘22) initiated the study of concretely efficient schemes based on well-understood assumptions in the random oracle model. However, these schemes still have several major drawbacks: 1) The signer is required to keep state; 2) The computation grows linearly with the number of signing interactions, making the schemes impractical; 3) The schemes require at least five moves of interaction.
> 
> In this paper, we introduce a blind signature scheme that eliminates all of the above drawbacks at the same time. Namely, we show a round-optimal, concretely efficient, concurrently secure, and stateless blind signature scheme in which communication and computation are independent of the number of signing interactions. Our construction also naturally generalizes to the partially blind signature setting.
> 
> Our scheme is based on the \(\textsf{CDH}\) assumption in the asymmetric pairing setting and can be instantiated using a standard BLS curve. We obtain signature and communication sizes of 9 KB and 36 KB, respectively. To further improve the efficiency of our scheme, we show how to obtain a scheme with better amortized communication efficiency. Our approach batches the issuing of signatures for multiple messages.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_26](https://doi.org/10.1007/978-3-031-30589-4_26)
